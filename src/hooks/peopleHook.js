

export const useAgeCalculator = (dob) => {
    
    const today = new Date(); // Current date
    const birth = new Date(dob      ); // Convert birthDate string to Date object
  
    let age = today.getFullYear() - birth.getFullYear(); // Difference in years
  
    // Adjust age if today's date is before the birthday this year
    const isBeforeBirthdayThisYear =
      today.getMonth() < birth.getMonth() || 
      (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate());
  
    if (isBeforeBirthdayThisYear) {
      age--;
    }
  
    return age;
  
}