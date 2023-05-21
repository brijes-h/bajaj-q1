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

    if (isSkillSelected) {
      handleSkillSelection(selectedSkills.filter((selectedSkill) => selectedSkill !== skill));
    } else {
      handleSkillSelection([...selectedSkills, skill]);
    }
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
        <div className="flex flex-wrap mt-2 justify-center"> {/* Added 'justify-center' class */}
          {skills.map((skill) => (
            <button
              key={skill}
              className={`bg-[#2C3333] text-[#FFFFFF] px-3 py-2 rounded-full mr-2 mb-2 ${
                selectedSkills.includes(skill) ? 'bg-blue-500 text-white' : 'bg-[#CBE4DE] text-gray-800'
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
