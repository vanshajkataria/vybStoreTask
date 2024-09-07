import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export default function Example() {
  return (
    <div className="">
      <div className="flex flex-col gap-6">
        <Disclosure as="div" className="p-6 bg-secondary rounded-2xl">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[14px] md:text-[16px] font-bold text-left">
              How much does it cost to set up a store?
            </span>
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
          </DisclosureButton>
          <DisclosurePanel className="text-[12px] md:text-[14px] text-left">
            Lorem Ipsum
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6 bg-secondary rounded-2xl">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[14px] md:text-[16px] font-bold text-left">
              What kind of digital products can I sell?
            </span>
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
          </DisclosureButton>
          <DisclosurePanel className="text-[12px] md:text-[14px] text-left">
            Lorem Imsum
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6 bg-secondary rounded-2xl">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[14px] md:text-[16px] font-bold text-left">
              Do I need technical skills to use the platform?
            </span>
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
          </DisclosureButton>
          <DisclosurePanel className="text-[12px] md:text-[14px] text-left">
            Lorem Ipsum
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6 bg-secondary rounded-2xl">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[14px] md:text-[16px] font-bold text-left">
              Is there a limit to the number of products I can list?
            </span>
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
          </DisclosureButton>
          <DisclosurePanel className="text-[12px] md:text-[14px] text-left">
            Lorem Ipsum
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6 bg-secondary rounded-2xl">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[14px] md:text-[16px] font-bold text-left">
              How do I receive payments for my sales?
            </span>
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
          </DisclosureButton>
          <DisclosurePanel className="text-[12px] md:text-[14px] text-left">
            Lorem Ipsum
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6 bg-secondary rounded-2xl">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[14px] md:text-[16px] font-bold text-left">
              Can I sell internationally on this marketplace?
            </span>
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
          </DisclosureButton>
          <DisclosurePanel className="text-[12px] md:text-[14px] text-left">
            Lorem Ipsum
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6 bg-secondary rounded-2xl">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-[14px] md:text-[16px] font-bold text-left">
              What support and resources are available for sellers?
            </span>
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
          </DisclosureButton>
          <DisclosurePanel className="text-[12px] md:text-[14px] text-left">
            Lorem Ipsum
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
}
