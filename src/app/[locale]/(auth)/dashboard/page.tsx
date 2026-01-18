import { useTranslations } from 'next-intl';

import { MessageState } from '@/features/dashboard/MessageState';
import { TitleBar } from '@/features/dashboard/TitleBar';

export default function DashboardIndexPage() {
  const t = useTranslations('DashboardIndex');

  return (
    <>
      <TitleBar
        title={t('title_bar')}
        description={t('title_bar_description')}
      />

      <MessageState
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-6"
          >
            <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3" />
            <path d="M12 12l8-4.5" />
            <path d="M12 12v9" />
            <path d="M12 12L4 7.5" />
          </svg>
        }
        title={t('message_state_title')}
        description={t.rich('message_state_description', {
          code: chunks => (
            <code className="rounded bg-secondary px-1 text-secondary-foreground">
              {chunks}
            </code>
          ),
        })}
        button={<></>}
      />
    </>
  );
}
