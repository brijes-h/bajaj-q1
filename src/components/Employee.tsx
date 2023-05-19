import React from 'react'
import { useState } from 'react'
import { EmployeeDetails, EmployeeType } from '../utilities/types'
import axios from 'axios';
import { useEffect } from 'react';
import Card from './Card';
import Search from './Search';

function Employee() {
    const [data, setData] = useState<EmployeeDetails>();
    const [isSearch, setSearch] = useState<Boolean>(false);
    const [searchQuery, setSearchQuery] = useState('');
    // const [designationFilter, setDesignationFilter] = useState('');
    // const [skillsFilter, setSkillsFilter] = useState('');


    // const handleDesignationFilterChange = (event : any) => {
    //     setDesignationFilter(event.target.value);
    // };

    // const handleSkillsFilterChange = (event : any) => {
    //     setSkillsFilter(event.target.value);
    // };
    const [filteredDevelopers, setFilteredDevelopers] = useState<any>();

    const filterDevelopers = () => {
        const filteredList = data?.employees.filter((developer) => {
            // Filter by name
            const nameMatches = developer.name?.toLowerCase().includes(searchQuery.toLowerCase());

            // Filter by designation/skills
            // const designationMatches = developer.designation?.toLowerCase().includes(designationFilter.toLowerCase());
            // const skillsMatches = developer.skills?.includes(skillsFilter);

            // Return true if any of the filters match
            return nameMatches
        });

        setFilteredDevelopers(filteredList);
        console.log(filteredList)
    };


    const fetchData = async () => {
        try {
            const resp = await axios.get(`https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json`);
            setData(resp.data)
        }
        catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        fetchData()
    }, [])

    // useEffect(() => {
    //     filterDevelopers();
    // }, [searchQuery, designationFilter, skillsFilter]);


    return (
        <div className='bg-[#0D1821]'>
            <div className='w-full h-max mt-6'>
                <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
            <div className='w-full flex flex-wrap m-6 justify-center'>
                {
                    isSearch ?
                        <div></div> :
                        data?.employees.map((element: EmployeeType, index) => {
                            return (
                                <Card data={element} />
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Employee