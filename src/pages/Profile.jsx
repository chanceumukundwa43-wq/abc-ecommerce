export default function Profile() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-heading">
          <div>
            <span className="eyebrow">ACCOUNT</span>
            <h1>User Profile</h1>
          </div>
        </div>

        <div className="profile-card">
          <div className="avatar">👤</div>
          <div>
            <h2>ABC Customer</h2>
            <p><strong>Email:</strong> customer@example.com</p>
            <p><strong>Location:</strong> Kayonza, Rwanda</p>
            <p className="muted">This is a frontend demo profile for the assignment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}