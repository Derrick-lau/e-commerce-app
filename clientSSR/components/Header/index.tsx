import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import Link from 'next/link'
import CustomModal from '../CustomModal/Confirmation'
import { LogoutApi} from '../../api'


const Header: React.FC = () => {
    const [isLoggedin, setisLoggedin] = useState(false)

    useEffect(() => {
        if(window.localStorage.getItem('accessToken')) {
            setisLoggedin(true)
        }
    }, [])

    const handleLogout = async () => {
   
        await LogoutApi().post()
        window.localStorage.removeItem('accessToken')
        window.localStorage.removeItem('refreshToken')
        setisLoggedin(false)
    }
    
    return (
        <header className={styles.header}>
            <Link href={'/'} >
                <a href={'/'} className={styles.logo}>
                    <img alt="computer component store" src="/ecommerce.png"/> 
                </a>
            </Link>
            <div className={styles.routes}>
                {isLoggedin ? 
                    <>
                    <Link href={'/order'} >
                        <a href={'/order'} className={styles.route}>
                            <p>My Order</p>
                        </a>
                    </Link>
                    <Link href={'/trolley'} >
                        <a href={'/trolley'} className={styles.route}> 
                            <img alt="computer component store trolley" src="/trolley.png"/> 
                        </a>
                    </Link>
                    <Link href={'/wishList'} >
                        <a href={'/wishList'} className={styles.route} > 
                            <img alt="computer component store wishlist" src="/wishlist.png"/> 
                        </a>
                    </Link>
                    <CustomModal logo={"/logout.png"} action={<>Logout</>}handleSave={handleLogout}>Log out</CustomModal>
                    
                    </>
                : 
                    <>
                    <Link href={'/login'} ><a href={'/login'} className={styles.route}><p>Log in</p></a></Link>
                    <Link href={'/register'} ><a href={'/register'} className={styles.route}><p>Register</p></a></Link>
                    </>
                }
            </div>
        </header> 
    )
}

export default Header;