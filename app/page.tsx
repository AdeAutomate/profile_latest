export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Your Name</h1>
        <h2 className="text-xl text-gray-600 mb-6">Python Automation Enthusiast | Self-Taught Tech Explorer</h2>

        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-2">👋 About Me</h3>
          <p>
            I'm a self-driven learner currently building skills in Python and automation. My journey started from humble beginnings, and now I'm passionate about solving real-world problems with simple tech solutions. I'm currently enrolled in the Google IT Automation with Python program.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-2">🛠️ What I Can Do</h3>
          <ul className="list-disc list-inside">
            <li>Automate repetitive file and folder tasks</li>
            <li>Clean and reformat Excel or CSV files using Python</li>
            <li>Script basic email sending or reporting tasks</li>
            <li>Build simple utilities to make workflows easier</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-2">📂 Sample Projects</h3>
          <ul className="list-disc list-inside">
            <li>CSV Cleaner: Automated messy data cleanup into organized Excel sheets</li>
            <li>Email Notifier: Sent emails based on event logs using Python's smtplib</li>
            <li>Folder Organizer: Grouped and renamed large batches of files automatically</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-2">📫 Get in Touch</h3>
          <p>Email: <a href="mailto:you@example.com" className="text-blue-600">you@example.com</a></p>
          <p>GitHub: <a href="https://github.com/yourprofile" className="text-blue-600">github.com/yourprofile</a></p>
        </section>

        <footer className="text-center text-sm text-gray-500 mt-10">
          <p>“Learning daily, growing constantly.”</p>
        </footer>
      </div>
    </main>
  );
}
