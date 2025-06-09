import Styles from './Navv.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navv = () => {
  return (
    <>
        <div className={Styles.Navv}>
            <Navbar collapseOnSelect expand="lg" className={Styles.nav}>
                <Container>
                    <Navbar.Brand href="/" className='flex text-center align-center gap-[10px]' id={Styles.logo}>
                        <img src="/Images/logo.png" alt="img" className='h-[48px] w-[44px]' />
                        <div className='text-[14px] mt-[12.8px] font-semibold text-center leading-none'>
                            <div className={Styles.d1}>Job</div>
                            <div className={Styles.d1} >Plus</div>
                        </div>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/" className='mr-8' id={Styles.dd1}>Home</Nav.Link>
                            <Nav.Link href="#companyreveiws" id={Styles.dd1}>Company reviews</Nav.Link>
                        </Nav>
                         <div className={Styles.divider}></div>
                        <Nav className='gap-[2rem]' id={Styles.dd2}>
                            <div className="relative group cursor-pointer">
                                <Nav.Link href="#notification" id={Styles.dd3} className={Styles.dd33}>
                                    <img src="/Images/notification.png" alt="" className='h-[23px] w-[23px]' />
                                    <span id={Styles.s1}>Notification</span>
                                </Nav.Link>
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 z-50 whitespace-nowrap">
                                    Notifications
                                </div>
                            </div>
                            <div className='relative group cusor-pointer'>
                                <Nav.Link eventKey={2} href="#account"  id={Styles.dd3}  className={Styles.dd33}>
                                    <img src="/Images/profile1.png" alt="" className='h-[23px] w-[23px]' />
                                    <span id={Styles.s1}>Account</span>
                                </Nav.Link>
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 z-50 whitespace-nowrap">
                                    Account
                                </div>
                            </div>
                            <Nav.Link href="/addjobs" id={Styles.dd3} >
                                <button className={Styles.btn1}>
                                    Add Job
                                </button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    </>
    
  )
}
