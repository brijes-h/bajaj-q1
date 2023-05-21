import React from 'react';

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSkillSelection: (selectedSkills: string[]) => void;
  selectedSkills: string[];
}

function Search({
  searchQuery,
  setSearchQuery,
  handleSkillSelection,
  selectedSkills
}: SearchProps) {
  const skills = [
    'SQL',
    'Javascript',
    'Python',
    'HTML',
    'CSS',
    'Photoshop',
    'Manual Testing',
    'Java'
  ];

  const handleSelectSkill = (skill: string) => {
    const isSkillSelected = selectedSkills.includes(skill);
    let updatedSelectedSkills: string[];

    if (isSkillSelected) {
      updatedSelectedSkills = selectedSkills.filter((selectedSkill) => selectedSkill !== skill);
    } else {
      updatedSelectedSkills = [...selectedSkills, skill];
    }

    handleSkillSelection(updatedSelectedSkills);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 rounded-sm w-80"
      />

      <div className="mt-4">
        <h2 className="text-lg font-medium">Skills:</h2>
        <div className="flex flex-wrap mt-2 justify-center">
          {skills.map((skill) => (
            <button
              key={skill}
              className={`bg-white text-[#000000] px-3 py-2 rounded-full mr-2 mb-2 ${
                selectedSkills.includes(skill) ? 'bg-black-500 text-black' : 'bg-blue-300 text-black-800'
              }`}
              onClick={() => handleSelectSkill(skill)}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;


