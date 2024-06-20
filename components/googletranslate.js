import React from "react";
import { useEffect, useState } from "react";
import { SelectPicker } from "rsuite";
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import 'rsuite/dist/rsuite.min.css';

function Translator() {
  const languages = [
    { label: 'English', value: '/auto/en' },
    { label: 'Русский', value: '/auto/ru' },
    { label: 'Polski', value: '/auto/pl' },
    { label: 'Deutsch', value: '/auto/de' }
  ];

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;

    if (hasCookie('googtrans')) {
      setSelected(getCookie('googtrans'));
    } else {
      setSelected('/auto/en');
    }
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({
      pageLanguage: 'auto',
      autoDisplay: false,
      includedLanguages: "ru,en,pl",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  };

  const langChange = (value, _, evt) => {
    setCookie('googtrans', value);
    setSelected(value);
    window.location.reload();
  };

  return (
    <div className="relative">
      <div id="google_translate_element" className="absolute w-0 h-0 overflow-hidden">
      <div className="fixed top-0 right-10 transform -translate-x-1/2 z-50 p-4 bg-white shadow-lg">
        <SelectPicker
          data={languages}
          style={{ width: 100 }}
          placement="bottomEnd"
          cleanable={false}
          value={selected}
          searchable={false}
          className={'notranslate'}
          menuClassName={'notranslate'}
          onSelect={(value, event) => langChange(value, null, event)}
          placeholder="Lang"
        />
      </div>
      </div>
    </div>
  );
}

export default Translator;
