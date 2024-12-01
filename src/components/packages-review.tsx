import PackageButton from "./package-button";
import { usePackages } from "./packages-provider";

export default function useReviewModal() {
  const { packages } = usePackages();
  const openModal = () =>
    (
      document.getElementById("review_modal") as HTMLDialogElement | undefined
    )?.showModal();
  const closeModal = () =>
    (document.getElementById("review_modal") as HTMLDialogElement | undefined)?.close();

  if (packages.length === 0) {
    closeModal();
  }

  const modal = (
    <>
      <dialog id="review_modal" className="modal">
        <div className="modal-box overflow-visible">
          <h3 className="font-bold text-lg">Selected packages</h3>
          {packages.length > 0 &&
            packages.map((e) => (
              <PackageButton pack={e} key={e.Id} style={{ width: "100%" }} />
            ))}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <input type="checkbox" id="review_modal" className="modal-toggle" />
    </>
  );

  return { openModal, closeModal, modal };
}
