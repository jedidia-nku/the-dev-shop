import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
const menu = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Services",
		href: "/services"
	},
	{
		title: "About Us",
		href: "/about",
	},
	{
		title: "Contact Us",
		href: "/contact",
	},
	{
		title: "Careers",
		href: "/careers",
	},
];
export const MobileSidebar = ({
	isOpen = false,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) => {
	const sidebarClasses = `flex flex-col fixed inset-y-0 left-0 z-50 top-0 bottom-0 w-[80%] md:w-[60%] overflow-y-auto h-[100%] bg-gray-100 transform transition-transform text-black ${
		isOpen ? "translate-x-0" : "-translate-x-full"
	}`;
	const overlayClasses = `fixed top-0 inset-0 bg-[rgba(0,0,0,0.5)] z-40 transition-opacity overflow-hidden ${
		isOpen ? "block" : "hidden"
	}`;
	return (
		<div>
			<div className={overlayClasses} onClick={onClose}></div>
			<motion.div
				className={sidebarClasses}
				initial="closed"
				animate={isOpen ? "open" : "closed"}
				variants={{
					closed: {
						opacity: 0,
						transform: "translateX(-100%)",
					},
					open: {
						opacity: 1,
						transform: "translateX(0)",
					},
				}}
				transition={{ duration: 0.5, ease: "easeInOut" }}
			>
				<div className="flex-shrink-0 sticky top-0 left-0 flex justify-between items-center z-20 bg-primary py-2 px-1">
					<MdClose
						className="text-white w-6 h-6 opacity-80"
						onClick={onClose}
					/>
				</div>
				<div className="p-4 flex-grow-1 h-auto flex-1 overflow-y-auto">
					<ul className="space-y-1 font-medium">
						{menu.map((item) => (
							<li className="group">
								<a
									href={item.href}
									className="flex items-center p-2 text-gray-900 rounded-sm hover:bg-gray-200"
								>
                                    {item.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</motion.div>
		</div>
	);
};