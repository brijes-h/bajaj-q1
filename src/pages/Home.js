import { useEffect, useState } from "react"

// components
import EmployeeTable from "../components/EmployeeTable"

const Home = () => {
  const [employeeData, setEmployees] = useState(null)

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch('https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json')
      const json = await response.json()

      if (response.ok) {
        setEmployees(json)
      }
    }

    fetchEmployees()
  }, [])

  return (
    <div className="container">
      {employeeData && <EmployeeTable employees={employeeData} />}
    </div>
  )
}

export default Home