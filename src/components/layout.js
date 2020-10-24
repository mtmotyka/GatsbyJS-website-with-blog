import React from 'react';
import { CookiesProvider, withCookies } from 'react-cookie';

import Header from './header';
import Footer from './footer';

import '../assets/sass/style.scss';

class Layout extends React.Component {
  state = {
    cookieOpen: false,
  };
  componentDidMount() {
    const { cookies } = this.props;
    const isAcceptedCoookie = !!cookies.get('cookie-accept-blog');
    !isAcceptedCoookie && this.setState({ cookieOpen: true });
  }

  acceptCookie = () => {
    const { cookies } = this.props;

    const promiseSetCookie = new Promise(resolve =>
      resolve(cookies.set('cookie-accept-alicja', 'active', { path: '/' })),
    );
    promiseSetCookie.then(() => {
      this.setState({ cookieOpen: false });
    });
  };

  render() {
    const { children } = this.props;
    return (
      <>
        <CookiesProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          {
            // <div
            //   className={`cookie-baner ${this.state.cookieOpen ? "open" : ""}`}
            //   id="mainBelt"
            // >
            //   <p>This Site Uses Cookies</p>
            //
            //   <div>
            //     <button
            //       className="btn-custom btn-custom--small btn-custom--green"
            //       onClick={this.acceptCookie}
            //     >
            //       Ok
            //     </button>
            //
            //     <a
            //       href="/cookies-policy/"
            //       className="link"
            //       target="_blank"
            //       rel="noopener noreferrer"
            //     >
            //       Read more
            //     </a>
            //   </div>
            // </div>
          }
        </CookiesProvider>
      </>
    );
  }
}

export default withCookies(Layout);
