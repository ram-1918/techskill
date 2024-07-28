import { useTranslation } from 'react-i18next';
import BaseSlide from '../components/BaseSlide';
import BaseHeader from '../components/BaseHeader';

function ThankYou() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <BaseSlide>
      <BaseHeader text="thank you" />
      <div className='desktop:w-[40%] laptop:w-[50%] tablet:w-[60%]  mobile:w-[90%] small:[90%] h-[70%] rounded-xl shadow-xl bg-thankyou bg-cover bg-center bg-no-repeat'></div>
    </BaseSlide>
  );
}


export default ThankYou;