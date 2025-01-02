// 作成途中です。Issue作成済み
import { useEffect } from 'react';
import sharp from 'sharp';

export interface OptimizedImageProps {
  src: string;
  widths?: number[];
  formats?: string[];
}

function OptimizedImage({ src, widths = [320, 640, 1280], formats = ['webp', 'jpeg'] }: OptimizedImageProps) {
  useEffect(() => {
    // ビルド時に実行される処理
    const generateOptimizedImages = async () => {
      const image = await sharp(src);
      // 各幅とフォーマットで画像を生成
      for (const width of widths) {
        for (const format of formats) {
          await image
            .clone()
            .resize(width)
            .toFormat(format as keyof sharp.FormatEnum)
            .toFile(`public/optimized/${width}-${format}.${format}`);
        }
      }
    };
    generateOptimizedImages();
  }, [src, widths, formats]);

  // 実際の画像表示は、生成された画像のパスを参照する
  return (
    <img src={`optimized/${widths[0]}-${formats[0]}.${formats[0]}`} alt="Optimized Image" />
  );
}

export default OptimizedImage;