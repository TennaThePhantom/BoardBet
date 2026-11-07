import React, { useState, useEffect } from "react";
import {
	Menu as MenuIcon,
	Heart,
	History,
	Users,
	Sparkles,
	Gem,
	Flame,
	Zap,
	Gamepad2,
	Spade,
	Dices,
	Swords,
	PartyPopper,
	Gift,
	FileText,
	Newspaper,
	Calendar,
	Handshake,
	ShieldCheck,
	Headset,
	HelpCircle,
	MessageSquare,
	Lock,
	ChevronDown,
} from "lucide-react";

const MENU_CONFIG = [
	{
		id: "top",
		title: null,
		items: [
			{ label: "Favorites", icon: Heart },
			{ label: "Recent", icon: History },
			{ label: "Custom Lobbies", icon: Users },
		],
	},
	{
		id: "games",
		title: "GAMES",
		items: [
			{ label: "New Releases", icon: Sparkles },
			{ label: "Classic Games", icon: Gem },
			{ label: "BoardBet Originals", icon: Flame },
			{ label: "Only On BoardBet", icon: Zap },
			{ label: "Hasbro Games", icon: Gamepad2 },
			{ label: "Card Games", icon: Spade },
			{ label: "Dice Games", icon: Dices },
			{ label: "Strategy Games", icon: Swords },
			{ label: "Party Games", icon: PartyPopper },
		],
	},
	{
		id: "second",
		title: null,
		items: [
			{
				label: "Promotions",
				icon: Gift,
				subItems: [{ label: "Coming soon", icon: Lock }],
			},
			{ label: "Blog", icon: FileText },
			{ label: "News", icon: Newspaper },
			{ label: "Events", icon: Calendar },
		],
	},
	{
		id: "third",
		title: null,
		items: [
			{
				label: "Sponsorships",
				icon: Handshake,
				subItems: [{ label: "Coming soon", icon: Lock }],
			},
			{ label: "Responsible Gaming", icon: ShieldCheck },
			{ label: "Live Support", icon: Headset },
			{ label: "Help Center", icon: HelpCircle },
			{ label: "Community", icon: MessageSquare },
		],
	},
];

export default function SideBar() {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [expandedMenus, setExpandedMenus] = useState({});

	// Close accordion menus when sidebar collapses to prevent awkward layouts
	useEffect(() => {
		if (isCollapsed) {
			setExpandedMenus({});
		}
	}, [isCollapsed]);

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
	};

	const toggleAccordion = (label) => {
		if (isCollapsed) {
			// If collapsed, clicking an accordion parent opens the sidebar first
			setIsCollapsed(false);
			setExpandedMenus({ [label]: true });
		} else {
			setExpandedMenus((prev) => ({
				...prev,
				[label]: !prev[label],
			}));
		}
	};

	const NavItem = ({ item, isSubItem = false }) => {
		const Icon = item.icon;
		const hasSubItems = item.subItems && item.subItems.length > 0;
		const isExpanded = expandedMenus[item.label];

		// The inner content of the button/link
		const itemContent = (
			<div
				className={`flex items-center w-full ${isCollapsed ? "justify-center" : "justify-between"}`}
			>
				<div className={`flex items-center ${isCollapsed ? "gap-0" : "gap-3"}`}>
					<Icon
						size={isSubItem ? 16 : 20}
						className={`flex-shrink-0 transition-all duration-300 ${isSubItem ? "opacity-70" : "opacity-90"} ${isCollapsed && !isSubItem ? "mx-auto" : ""}`}
					/>
					<span
						className={`whitespace-nowrap transition-all duration-300 font-medium ${isCollapsed ? "opacity-0 w-0 hidden" : "opacity-100 w-auto block"} ${isSubItem ? "text-sm opacity-70" : "text-base"}`}
					>
						{item.label}
					</span>
				</div>

				{/* Accordion Chevron */}
				{hasSubItems && !isCollapsed && (
					<ChevronDown
						size={16}
						className={`transition-transform duration-300 opacity-50 ${isExpanded ? "rotate-180" : ""}`}
					/>
				)}
			</div>
		);

		// If sidebar is collapsed, wrap in a DaisyUI tooltip
		const buttonClass = `btn btn-ghost w-full font-normal hover:bg-base-content/10 text-base-content/80 hover:text-base-content transition-all duration-200 
      ${isCollapsed ? "px-0 h-12 w-12 rounded-xl mx-auto" : "px-3 h-11 justify-start rounded-lg"} 
      ${isSubItem ? "min-h-0 h-10 mt-1 bg-base-300/50" : ""}`;

		const InteractiveElement = (
			<button
				onClick={() => (hasSubItems ? toggleAccordion(item.label) : null)}
				className={buttonClass}
			>
				{itemContent}
			</button>
		);

		return (
			<li className="mb-1 list-none w-full flex flex-col relative">
				{isCollapsed ? (
					<div
						className="tooltip tooltip-right z-50 flex justify-center w-full"
						data-tip={item.label}
					>
						{InteractiveElement}
					</div>
				) : (
					InteractiveElement
				)}

				{/* Sub-items (Accordion Content) */}
				{hasSubItems && (
					<div
						className={`grid transition-all duration-300 ease-in-out w-full ${isExpanded && !isCollapsed ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
					>
						<div className="overflow-hidden w-full pl-4 border-l-2 border-base-content/5 ml-4 mt-1">
							{item.subItems.map((subItem, idx) => (
								<NavItem key={idx} item={subItem} isSubItem={true} />
							))}
						</div>
					</div>
				)}
			</li>
		);
	};

	return (
		<aside
			data-theme="dim"
			className={`bg-base-200 border-r border-base-content/5 flex flex-col h-screen transition-all duration-300 ease-in-out z-20 shrink-0 font-sans text-base-content
        ${isCollapsed ? "w-[72px]" : "w-[260px]"}`}
		>
			{/* Header / Brand Area */}
			<div className="h-16 flex items-center px-4 border-b border-base-content/5 shrink-0">
				<button
					onClick={toggleSidebar}
					className="btn btn-ghost btn-sm btn-square text-base-content/70 hover:text-base-content hover:bg-base-content/10"
				>
					<MenuIcon size={20} />
				</button>

				<div
					className={`ml-3 font-bold text-lg tracking-wide flex items-center gap-2 transition-all duration-300 whitespace-nowrap overflow-hidden
          ${isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"}`}
				>
					<Gamepad2 size={24} className="text-primary" />
					BoardBet
				</div>
			</div>

			{/* Scrollable Navigation */}
			<nav className="flex-1 overflow-y-auto overflow-x-hidden p-3 custom-scrollbar">
				{MENU_CONFIG.map((section, idx) => (
					<React.Fragment key={section.id}>
						{/* Section Divider (Skip for first item) */}
						{idx > 0 && (
							<div
								className={`h-[1px] bg-base-content/10 my-3 mx-auto transition-all duration-300 ${isCollapsed ? "w-8" : "w-full"}`}
							/>
						)}

						{/* Section Title */}
						{section.title && (
							<div
								className={`text-xs font-bold text-base-content/40 tracking-wider mb-2 transition-all duration-300 whitespace-nowrap
                ${isCollapsed ? "opacity-0 h-0 overflow-hidden m-0" : "opacity-100 px-3 mt-4"}`}
							>
								{section.title}
							</div>
						)}

						{/* Section Items */}
						<ul className="flex flex-col m-0 p-0 w-full items-center">
							{section.items.map((item, itemIdx) => (
								<NavItem key={itemIdx} item={item} />
							))}
						</ul>
					</React.Fragment>
				))}
				<div className="h-10 shrink-0" /> {/* Bottom padding */}
			</nav>

			{/* Injecting scrollbar styles to hide the visual scrollbar while keeping scroll functionality */}
			<style
				dangerouslySetInnerHTML={{
					__html: `
        /* Hide scrollbar for Chrome, Safari and Opera */
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .custom-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `,
				}}
			/>
		</aside>
	);
}
