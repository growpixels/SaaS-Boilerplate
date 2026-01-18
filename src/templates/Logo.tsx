import Image from 'next/image';
import { AppConfig } from '@/utils/AppConfig';

export const Logo = ({ isTextHidden }: { isTextHidden?: boolean }) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.svg"
        alt={AppConfig.name}
        width={32}
        height={32}
        unoptimized
      />

      {!isTextHidden && (
        <span className="text-lg font-semibold">
          {AppConfig.name}
        </span>
      )}
    </div>
  );
};
