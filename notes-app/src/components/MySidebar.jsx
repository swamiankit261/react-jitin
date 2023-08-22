import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

function MySidebar() {
    return (
        <>
            <div className='rounded-4 shadow h-100'>
                <Sidebar className='h-100'>
                    <Menu>
                        <MenuItem component={<Link to='/addNotes' ></Link>}> Add Note </MenuItem>
                        <MenuItem component={<Link to='/notes' ></Link>}> My Notes </MenuItem>
                    </Menu>
                </Sidebar>
            </div>
        </>
    )
}

export default MySidebar