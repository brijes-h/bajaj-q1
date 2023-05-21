// import React from 'react'
// import { useState } from 'react'
// import { EmployeeDetails, EmployeeType } from '../utilities/types'
// import axios from 'axios';
// import { useEffect } from 'react';
// import Card from './Card';
// import Search from './Search';

// function Employee() {
//     const [data, setData] = useState<EmployeeDetails>();
//     const [isSearch, setSearch] = useState<Boolean>(false);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [designationFilter, setDesignationFilter] = useState('');
//     const [skillsFilter, setSkillsFilter] = useState('');


//     const [filteredDevelopers, setFilteredDevelopers] = useState<any>();

//     const filterDevelopers = () => {
//         const filteredList = data?.employees.filter((developer, index: number) => {
//             let skills = undefined
//             if (developer.skills)
//                 skills = developer.skills[index];
//             const nameMatches = developer.name?.toLowerCase().includes(searchQuery.toLowerCase())
//                 || developer.designation?.toLowerCase().includes(searchQuery.toLowerCase()) || skills?.toLowerCase().includes(searchQuery.toLowerCase());


//             return nameMatches
//         });

//         setFilteredDevelopers(filteredList);
//     };



//     const fetchData = async () => {
//         try {
//             const resp = await axios.get(`https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json`);
//             setData(resp.data)
//         }
//         catch (err) {
//             console.log(err)
//         }

//     }
//     useEffect(() => {
//         fetchData()
//     }, [])

//     useEffect(() => {
//         filterDevelopers();
//     }, [searchQuery]);


//     return (
//         <div className='bg-[#0D1821]'>
//             <div className='w-full h-max mt-6'>
//                 <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//             </div>
//             <div className='w-full flex flex-wrap m-6 justify-center'>
//                 {
//                     filteredDevelopers?.length > 0 ?

//                         filteredDevelopers.map((element: EmployeeType, index: number) => {
//                             return (
//                                 <Card data={element} />
//                             )
//                         })
//                         :
//                         data?.employees.map((element: EmployeeType, index) => {
//                             return (
//                                 <Card data={element} />
//                             )
//                         })
//                 }
//             </div>
//         </div>
//     )
// }

// export default Employee


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { EmployeeDetails, EmployeeType } from '../utilities/types';
import Card from './Card';
import Search from './Search';

function Employee() {
  const [data, setData] = useState<EmployeeDetails>();
  const [isSearch, setSearch] = useState<Boolean>(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [designationFilter, setDesignationFilter] = useState('');
  const [skillsFilter, setSkillsFilter] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [filteredDevelopers, setFilteredDevelopers] = useState<EmployeeType[] | undefined>(undefined);

  const filterDevelopers = () => {
    const filteredList = data?.employees.filter((developer) => {
      const nameMatches =
        developer.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        developer.designation?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        developer.skills?.some((skill) => selectedSkills.includes(skill.toLowerCase()));

      return nameMatches;
    });

    setFilteredDevelopers(filteredList);
  };

  const fetchData = async () => {
    try {
      const resp = await axios.get(
        'https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json'
      );
      setData(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterDevelopers();
  }, [searchQuery, selectedSkills]);

  return (
    <div className="bg-[#CBE4DE]">
      <div className="w-full h-max mt-6">
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSkillSelection={setSelectedSkills}
          selectedSkills={selectedSkills}
        />
      </div>
      <div className="w-full flex flex-wrap m-6 justify-center">
        {filteredDevelopers !== undefined && filteredDevelopers.length > 0 ? (
          filteredDevelopers.map((element: EmployeeType, index: number) => (
            <Card key={index} data={element} />
          ))
        ) : (
          data?.employees.map((element: EmployeeType, index) => (
            <Card key={index} data={element} />
          ))
        )}
      </div>
    </div>
  );
}

export default Employee;
