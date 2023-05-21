import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { EmployeeDetails, EmployeeType } from '../utilities/types';
import Card from './Card';
import Search from './Search';

function Employee() {
  const [data, setData] = useState<EmployeeDetails>();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [filteredDevelopers, setFilteredDevelopers] = useState<EmployeeType[]>([]);

  useEffect(() => {
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

    fetchData();
  }, []);

  useEffect(() => {
    filterDevelopers();
  }, [searchQuery, selectedSkills]);

  const filterDevelopers = () => {
    if (data) {
      let filteredList = data.employees;

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredList = filteredList.filter(
          (developer) =>
            developer.name?.toLowerCase().includes(query) ||
            developer.designation?.toLowerCase().includes(query) ||
            (developer.skills && developer.skills.some((skill) => skill.toLowerCase().includes(query)))
        );
      }

      if (selectedSkills.length > 0) {
        filteredList = filteredList.filter((developer) =>
          developer.skills?.some((skill) => selectedSkills.includes(skill))
        );
      }

      setFilteredDevelopers(filteredList);
    }
  };

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
        {filteredDevelopers.length > 0 ? (
          filteredDevelopers.map((element: EmployeeType, index: number) => (
            <Card key={index} data={element} />
          ))
        ) : (
          data?.employees.map((element: EmployeeType, index: number) => (
            <Card key={index} data={element} />
          ))
        )}
      </div>
    </div>
  );
}

export default Employee;
