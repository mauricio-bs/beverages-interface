import React, { createContext, useContext, useState, useEffect } from 'react'

interface IUserInfo {
  id: string
  name: string
  admin: boolean
}

const UserContext = createContext({
  putUserData: (userInfo: IUserInfo) => {},
  logout: () => {},
  userData: {}
})

export const UserProvider = ({ children }: NodeModule) => {
  const [userData, setUserData] = useState({})

  const putUserData = async (userInfo: IUserInfo) => {
    setUserData(userInfo)

    await localStorage.setItem('coffeland:userData', JSON.stringify(userInfo))
  }

  const logout = async () => {
    await localStorage.removeItem('coffeland:userData')
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('coffeland:userData')

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo))
      }

      loadUserData()
    }
  }, [])

  return (
    <UserContext.Provider value={{ putUserData, logout, userData }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used with UserContext')
  }

  return context
}
