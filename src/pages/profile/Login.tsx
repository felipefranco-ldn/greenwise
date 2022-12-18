import Layout from "../../components/Layout/Layout";
import LoginInterface from "../../components/LoginInterface/LoginInterface";
import ProfileOptions from "../../components/ProfileOptions/ProfileOptions";

export default function Login() {
  return (
    <Layout>
      <section className="estimate__main-box">
        <ProfileOptions />
        <section className="estimate__content-box">
          <div className="estimate__content">
            <LoginInterface />
          </div>
        </section>
      </section>
    </Layout>
  );
}
