import {useState} from 'react'
import './App.css'
import {useTranslation} from "react-i18next";

function App() {
    const [count, setCount] = useState(0)

    const {t} = useTranslation()

    return (
        <>
            {t('welcome')}
        </>
    )
}

export default App
