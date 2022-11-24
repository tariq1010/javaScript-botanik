import { openNotification } from "components/common"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { checkAuthRequest } from "store/redux/slices/adminSlices/checkAuthSlice"
import { loginRequest, resetLogin } from "store/redux/slices/adminSlices/loginSlices"
import { logoutRequest, resetLogout } from "store/redux/slices/adminSlices/logoutSlice"
import { useAppDispatch, useAppSelector } from "store/store"



export const LoginHook = () => {
    const { credentials, result, error, errorMessage, } = useAppSelector(state => state.login)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const login = () => {
        dispatch(loginRequest(credentials))
    }

    useEffect(() => {
        error && errorMessage.status === 505 && openNotification('Error', 'Something went Wrong, please refresh', 'error')
        result && dispatch(resetLogin()) && navigate('/contract-functions')
    }, [error, result])

    return{
        login
    }
}

export const CheckAuthHook = ()=>{

    const dispatch = useAppDispatch()
    const token =localStorage.getItem('access_token')
    const {auth, loading, error, errorMessage} = useAppSelector((state: any)=> state.auth)

    useEffect(()=>{
       token && dispatch(checkAuthRequest(token))
    },[token])

    return{
        auth,
        loading,
        error,
        errorMessage
    }
}

export const LogoutHook = () => {
    const { error, errorMessage, result, loading } = useAppSelector(state => state.logout)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
   
    const logout = () => {
        const token = localStorage.getItem('access_token')
        dispatch(logoutRequest(token))
    }

    useEffect(() => {
      
        error && errorMessage.status === 505 && openNotification('Error', 'Something went Wrong, please refresh', 'error')
        result && dispatch(resetLogout()) && navigate('/admin-login')
        error && errorMessage.status === 401 && navigate('/admin-login')
    }, [error, result])

    return{
        logout,
        logoutLoading: loading
    }
}

