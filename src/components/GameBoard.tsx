
import React, { useState } from 'react';
import { Gem, Bomb, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

interface Cell {
  id: number;
  revealed: boolean;
  hasBoom: boolean;
  hasReward: boolean;
}

const GameBoard = () => {
  const [balance, setBalance] = useState(1000);
  const [betAmount, setBetAmount] = useState(10);
  const [boomCount, setBoomCount] = useState(3);
  const [gameState, setGameState] = useState<'betting' | 'playing' | 'won' | 'lost'>('betting');
  const [grid, setGrid] = useState<Cell[]>([]);
  const [multiplier, setMultiplier] = useState(1.0);
  const [revealedRewards, setRevealedRewards] = useState(0);

  const gridSize = 25; // 5x5 grid arranged in triangular pattern

  const calculateMultiplier = (booms: number, revealed: number) => {
    const safeSpots = gridSize - booms;
    if (revealed === 0) return 1.0;
    return 1 + (booms * 0.3 * revealed) / Math.max(1, safeSpots - revealed);
  };

  const initializeGame = () => {
    if (betAmount > balance) {
      toast({
        title: "Insufficient funds",
        description: "You don't have enough balance to place this bet.",
        variant: "destructive"
      });
      return;
    }

    const newGrid: Cell[] = [];
    
    // Create grid cells
    for (let i = 0; i < gridSize; i++) {
      newGrid.push({
        id: i,
        revealed: false,
        hasBoom: false,
        hasReward: false
      });
    }

    // Place booms randomly
    const boomPositions = new Set<number>();
    while (boomPositions.size < boomCount) {
      const randomPos = Math.floor(Math.random() * gridSize);
      boomPositions.add(randomPos);
    }

    // Set booms and rewards
    newGrid.forEach((cell, index) => {
      if (boomPositions.has(index)) {
        cell.hasBoom = true;
      } else {
        cell.hasReward = true;
      }
    });

    setGrid(newGrid);
    setGameState('playing');
    setRevealedRewards(0);
    setMultiplier(1.0);
    setBalance(prev => prev - betAmount);
  };

  const revealCell = (cellId: number) => {
    if (gameState !== 'playing') return;

    const cell = grid.find(c => c.id === cellId);
    if (!cell || cell.revealed) return;

    const newGrid = grid.map(c => 
      c.id === cellId ? { ...c, revealed: true } : c
    );
    setGrid(newGrid);

    if (cell.hasBoom) {
      setGameState('lost');
      toast({
        title: "Boom! 💥",
        description: `You hit a boom and lost $${betAmount}!`,
        variant: "destructive"
      });
    } else {
      const newRevealedCount = revealedRewards + 1;
      setRevealedRewards(newRevealedCount);
      const newMultiplier = calculateMultiplier(boomCount, newRevealedCount);
      setMultiplier(newMultiplier);
      
      toast({
        title: "Bloom! 🌟",
        description: `Found a reward! Multiplier: ${newMultiplier.toFixed(2)}x`,
      });
    }
  };

  const cashOut = () => {
    if (gameState !== 'playing' || revealedRewards === 0) return;
    
    const winnings = Math.floor(betAmount * multiplier);
    setBalance(prev => prev + winnings);
    setGameState('won');
    
    toast({
      title: "Cashed out! 💰",
      description: `You won $${winnings} with ${multiplier.toFixed(2)}x multiplier!`,
    });
  };

  const resetGame = () => {
    setGameState('betting');
    setGrid([]);
    setMultiplier(1.0);
    setRevealedRewards(0);
  };

  const renderTriangularGrid = () => {
    return (
      <div className="relative w-80 h-80 mx-auto">
        {grid.map((cell, index) => {
          // Create triangular pattern positioning
          const row = Math.floor(index / 5);
          const col = index % 5;
          const x = col * 60 + (row % 2) * 30;
          const y = row * 52;
          
          return (
            <button
              key={cell.id}
              onClick={() => revealCell(cell.id)}
              disabled={gameState !== 'playing' || cell.revealed}
              className={`absolute w-12 h-12 transition-all duration-300 transform hover:scale-110 ${
                cell.revealed
                  ? cell.hasBoom
                    ? 'bg-red-500 border-red-600'
                    : 'bg-green-500 border-green-600'
                  : 'bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 border-purple-400'
              } border-2 rounded-lg flex items-center justify-center shadow-lg`}
              style={{
                left: `${x}px`,
                top: `${y}px`,
              }}
            >
              {cell.revealed && (
                <div className="animate-scale-in">
                  {cell.hasBoom ? (
                    <Bomb className="w-6 h-6 text-white" />
                  ) : (
                    <Gem className="w-6 h-6 text-white" />
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent mb-2">
            Boom or Bloom
          </h1>
          <p className="text-gray-300">Risk it all for the ultimate reward</p>
        </div>

        {/* Balance Display */}
        <div className="flex justify-center mb-6">
          <div className="bg-black/30 rounded-lg px-6 py-3 border border-yellow-500/30">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-400" />
              <span className="text-xl font-semibold text-yellow-400">
                {balance.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Controls */}
          <div className="bg-black/20 rounded-xl p-6 border border-purple-500/30">
            <h2 className="text-xl font-semibold mb-4">Game Controls</h2>
            
            {gameState === 'betting' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Bet Amount</label>
                  <Input
                    type="number"
                    value={betAmount}
                    onChange={(e) => setBetAmount(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                    max={balance}
                    className="bg-black/30 border-purple-500/50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Number of Booms (Risk Level)</label>
                  <Input
                    type="number"
                    value={boomCount}
                    onChange={(e) => setBoomCount(Math.max(1, Math.min(15, parseInt(e.target.value) || 1)))}
                    min="1"
                    max="15"
                    className="bg-black/30 border-purple-500/50"
                  />
                  <p className="text-xs text-gray-400 mt-1">More booms = higher multiplier</p>
                </div>
                
                <Button 
                  onClick={initializeGame}
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400"
                >
                  Start Game
                </Button>
              </div>
            )}

            {gameState === 'playing' && (
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span>Current Multiplier:</span>
                    <span className="text-xl font-bold text-yellow-400">
                      {multiplier.toFixed(2)}x
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Potential Win:</span>
                    <span className="text-lg font-semibold text-green-400">
                      ${Math.floor(betAmount * multiplier).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rewards Found:</span>
                    <span className="text-blue-400">{revealedRewards}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={cashOut}
                  disabled={revealedRewards === 0}
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400"
                >
                  Cash Out
                </Button>
              </div>
            )}

            {(gameState === 'won' || gameState === 'lost') && (
              <div className="space-y-4">
                <div className={`text-center p-4 rounded-lg ${
                  gameState === 'won' ? 'bg-green-900/50' : 'bg-red-900/50'
                }`}>
                  <h3 className="text-lg font-semibold mb-2">
                    {gameState === 'won' ? '🎉 You Won!' : '💥 Game Over'}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {gameState === 'won' 
                      ? `Cashed out with ${multiplier.toFixed(2)}x multiplier!`
                      : 'Better luck next time!'
                    }
                  </p>
                </div>
                
                <Button 
                  onClick={resetGame}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400"
                >
                  Play Again
                </Button>
              </div>
            )}
          </div>

          {/* Game Board */}
          <div className="bg-black/20 rounded-xl p-6 border border-purple-500/30">
            <h2 className="text-xl font-semibold mb-4 text-center">Game Board</h2>
            
            {gameState === 'betting' ? (
              <div className="flex items-center justify-center h-80 text-gray-400">
                <div className="text-center">
                  <Gem className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Place your bet to start playing</p>
                </div>
              </div>
            ) : (
              renderTriangularGrid()
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
