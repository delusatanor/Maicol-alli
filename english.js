let devProfile = {
    fullName: "John Smith",
    age: 30,
    profession: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    isEmployed: true,
    contact: {
      email: "john@example.com",
      location: "Posadas"
    }
  };
  
  function introduceProfile(profile) {
    let skillsText;
    if (profile.skills.length > 1) {
      let skillsExceptLast = profile.skills.slice(0, profile.skills.length - 1).join(", ");
      let lastSkill = profile.skills[profile.skills.length - 1];
      skillsText = skillsExceptLast + ", and " + lastSkill;
    } else {
      skillsText = profile.skills[0];
    }
    return `Hello! My name is ${profile.fullName}. I am a ${profile.profession}. I work with ${skillsText}. I live in ${profile.contact.location}. I am ${profile.age} years old.`;
  }
  