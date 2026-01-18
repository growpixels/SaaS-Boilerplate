import Image from 'next/image';
import { AppConfig } from '@/utils/AppConfig';

export const Logo = (props: { isTextHidden?: boolean }) => (
  <div className="flex items-center">
    <Image
      src="/logo.svg"
      alt={AppConfig.name}
      width={180}
      height={48}
      priority
      className="h-12 w-auto"
    />
    {!props.isTextHidden && (
      <span className="ml-2 text-2xl font-semibold">
        {AppConfig.name}
      </span>
    )}
  </div>
);
