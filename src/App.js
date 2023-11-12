import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Product from './components/product/product';
import Review from './components/review/review';

const StyledFooter = styled(Footer)`
`

function App() {
  return (<>
  <Header />
  <Product />
  <Review />
  <StyledFooter />
  </>
  );
}

export default App;
