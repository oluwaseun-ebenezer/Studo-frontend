import Head from "next/head";

const Layout = ({ children, site_title }) => {
  return (
    <div>
      <Head>
        <title>Studo - {site_title}</title>
        <meta name="description" content="Task Scheduling App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">{children}</main>
    </div>
  );
};

export default Layout;
