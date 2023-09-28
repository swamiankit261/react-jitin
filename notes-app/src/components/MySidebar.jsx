import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';
import { getCurrentDate, getCurrentTime } from '../utils/utilityFunction';
import { useState } from 'react';
import { useEffect } from 'react';

function MySidebar() {
    const [currentTime, setCurrentTime] = useState(getCurrentTime())
    const location = useLocation();

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(getCurrentTime())
        }, 1000);
    }, [])

    return (
        <>
            <div className='rounded-4 shadow h-100'>
                <Sidebar className='h-100 sidebar'>
                    <Menu className='d-flex flex-column justify-content-between' style={{ height: "83%" }}>
                        <MenuItem className={location.pathname === '/addNotes' && 'active_sidebar'} component={<Link to='/addNotes' ></Link>}> Add Note </MenuItem>
                        <MenuItem className={location.pathname === '/' && 'active_sidebar'} component={<Link to='/' ></Link>}> My Notes </MenuItem>
                        <MenuItem className={location.pathname === '/recycleBin' && 'active_sidebar'} component={<Link to='/recycleBin' ></Link>}> Recycle Bin </MenuItem>
                    </Menu>
                    <hr />
                    <div className='text-center my_clock'>
                        <p className='m-0'>{getCurrentDate()}</p>
                        <h4>{currentTime}</h4>
                    </div>
                </Sidebar>
            </div>
        </>
    )
}

export default MySidebar