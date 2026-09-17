import { useModal } from '../../context/ModalContext';

export default function InstallModal() {
  const { installOpen, installSuccess, closeInstallModal, confirmInstall } = useModal();

  if (!installOpen) return null;

  return (
    <div
      className="modal-overlay open"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeInstallModal();
      }}
    >
      <div className="modal">
        <button className="modal-close-x" onClick={closeInstallModal} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        {!installSuccess ? (
          <div className="modal-permstate">
            <div className="modal-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7.5" stroke="currentColor" strokeWidth="1.8" />
                <line x1="16.2" y1="16.2" x2="21" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Add &quot;ThreatLens&quot; to Chrome?</h3>
            <p>It will be able to:</p>
            <div className="perm-list">
              <div className="perm-item">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 12l6 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Read and analyze site content as pages load
              </div>
              <div className="perm-item">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 12l6 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Show warnings before risky navigation or downloads
              </div>
              <div className="perm-item">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 12l6 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Manage your scan history and settings
              </div>
            </div>
            <div className="modal-actions">
              <button className="btn btn-ghost" onClick={closeInstallModal}>Cancel</button>
              <button className="btn btn-primary" onClick={confirmInstall}>Add extension</button>
            </div>
          </div>
        ) : (
          <div className="modal-success show">
            <div className="modal-icon" style={{ background: 'rgba(62,216,143,.14)', borderColor: 'rgba(62,216,143,.35)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#3ED88F">
                <path d="M4 12l6 6L20 6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>ThreatLens is on guard.</h3>
            <p>
              You&apos;re set — it&apos;ll scan sites, links, QR codes and downloads automatically from here on.
              <br />
              <br />
              <span style={{ color: 'var(--text-faint)', fontSize: 12 }}>
                Demo experience — the live Chrome Web Store listing is on its way.
              </span>
            </p>
            <button className="btn btn-primary" onClick={closeInstallModal} style={{ width: '100%', justifyContent: 'center' }}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
