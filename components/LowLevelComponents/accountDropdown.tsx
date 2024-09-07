import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function Example() {
  return (
    <div className=" top-0 text-right">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3">
          <div className="flex items-center gap-4 border border-primaryText p-2 rounded-2xl select-none">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-[#000]/5 bg-[#000]/5 p-1 text-sm/6 glass-blur transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-50 "
        >
          <MenuItem>
            <button className="group flex justify-center w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-[#fff]/10">
              Profile
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex justify-center w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-[#fff]/10">
              Dashboard
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex justify-center w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-[#fff]/10">
              My Store
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex justify-center w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-[#fff]/10">
              Logout
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
