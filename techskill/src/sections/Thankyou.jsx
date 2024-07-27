import { useTranslation } from 'react-i18next';

function ThankYou() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('greeting', { name: 'welcome' })}</p>
    </div>
  );
}


export default ThankYou;