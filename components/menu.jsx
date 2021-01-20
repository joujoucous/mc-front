import { Alert, Navbar, Nav } from "../node_modules/react-bootstrap";
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


const Menu = (props) => {
    const { islogged } = props; //savoir si le mec est loggé
    const router = useRouter()
    const [isRedirected, setIsRedirected] = useState(false)
   
    useEffect(()=>{
        if(!islogged && (router.pathname !== "/" && router.pathname !== "/login" && router.pathname !== "/sign-in")){
            router.push('/')
            setIsRedirected(true)
        }
    }, [router.pathname])

        return (
            <>
            {
                isRedirected && 
                <Alert variant="danger">
                    Please login or signup before accessing the game !
                </Alert>
            }
            {
                islogged && 
                <Navbar bg="white" expand="lg">
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/game/play">Play</Nav.Link>
                            <Nav.Link href="/profil">Profil</Nav.Link>
                            <Nav.Link href="/">Log out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            }
            </>
        );

}
export default Menu;