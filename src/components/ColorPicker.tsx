'use client';

import { ColorOption } from '@/lib/types';

interface ColorPickerProps {
  selectedColor: ColorOption;
  onColorChange: (color: ColorOption) => void;
}

const colorClasses = {
  yellow: 'bg-gold-yellow',
  white: 'bg-gold-white',
  rose: 'bg-gold-rose',
};

const colorLabels = {
  yellow: 'Yellow Gold',
  white: 'White Gold',
  rose: 'Rose Gold',
};

export default function ColorPicker({ selectedColor, onColorChange }: ColorPickerProps) {
  const colors: ColorOption[] = ['yellow', 'white', 'rose'];

  return (
    <div className="flex items-center gap-2">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onColorChange(color)}
          className={`
            w-6 h-6 rounded-full border-2 transition-all
            ${colorClasses[color]}
            ${selectedColor === color ? 'border-gray-800 scale-110' : 'border-gray-300'}
          `}
          aria-label={colorLabels[color]}
          title={colorLabels[color]}
        />
      ))}
    </div>
  );
}

