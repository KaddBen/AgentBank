import { isValidEmail } from "./regex"
export const setError = (email, setEmailErr, password, setPasswordErr) => {
   
    let errorCount = 0;
    switch (email) {
      case email.length < 3 && email.length > 0:
        setEmailErr("Ce champ doit contenir au moins 3 caracteres");
        errorCount++;
        break;
      case email.length === 0:
        setEmailErr("Ce champ ne peut etre vide");
        errorCount++;
        break;
      case !isValidEmail(email):
        setEmailErr("Ce champ doit contenir un email valide");
        errorCount++;
        break;
      case password.length === 0:
        setPasswordErr("Ce champ ne peut etre vide");
        errorCount++;
        break;
      default:
        console.log(`Aucune erreur`);
    }
    return errorCount;
  };