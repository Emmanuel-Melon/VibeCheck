import { Matches } from "./Matches";
export const SideMenu = () => {
    return (
        <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Messages"
        />
        <div role="tabpanel" className="tab-content py-2">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Matches"
          checked
        />
        <div role="tabpanel" className="tab-content py-2">
        <Matches />
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Vibes"
        />
        <div role="tabpanel" className="tab-content py-2">
          Tab content 1
        </div>
      </div>
    );

}