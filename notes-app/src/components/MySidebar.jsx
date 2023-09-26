import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';

function MySidebar() {
    const location = useLocation();
    return (
        <>
            <div className='rounded-4 shadow h-100'>
                <Sidebar className='h-100 sidebar'>
                    <Menu>
                        <MenuItem className={location.pathname === '/addNotes' && 'active_sidebar'} component={<Link to='/addNotes' ></Link>}> Add Note </MenuItem>
                        <MenuItem className={location.pathname === '/' && 'active_sidebar'} component={<Link to='/' ></Link>}> My Notes </MenuItem>
                        <MenuItem className={location.pathname === '/recycleBin' && 'active_sidebar'} component={<Link to='/recycleBin' ></Link>}> Recycle Bin </MenuItem>
                        <MenuItem className={location.pathname === '/table' && 'active_sidebar'} component={<Link to='/table' ></Link>}> Table </MenuItem>
                    </Menu>
                </Sidebar>
            </div>
        </>
    )
}

export default MySidebar