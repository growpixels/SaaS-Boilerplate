import Image from 'next/image';
import { AppConfig } from '@/utils/AppConfig';

export const Logo = ({ isTextHidden }: { isTextHidden?: boolean }) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.svg"
        alt={AppConfig.name}
        width={40}
        height={40}
        priority
      />

      {!isTextHidden && (
        <span className="text-xl font-semibold">
          {AppConfig.name}
        </span>
      )}
    </div>
  );
};
