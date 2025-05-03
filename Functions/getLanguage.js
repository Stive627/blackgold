import frenchTrans from '../locales/fr/translation'
import englishTrans from '../locales/en/translation'
export default function getLanguage(lang){
    if(lang === 'fr'){
        return frenchTrans
    }
    return englishTrans
}