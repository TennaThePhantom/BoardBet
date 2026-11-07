import React from "react";
import { 
  ExternalLink, 
  MessageCircle,
  ShieldCheck,
  Box // Using Box as a placeholder icon
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-base-200 pt-12 pb-8 border-t border-base-content/5 z-10" data-theme="dim">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Section: Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1 */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-white font-semibold text-sm mb-1">Social Board Gaming</h4>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Games</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Card Games</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Dice Games</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Strategy Games</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Party Games</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Publishers</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Promotions</a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-white font-semibold text-sm mb-1">BoardBet Originals</h4>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Plinko</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Mines</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Dice</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Crash</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Limbo</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Hilo</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">All BoardBet Originals</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-white font-semibold text-sm mb-1">Support</h4>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors flex items-center gap-1.5">
              Help Center <ExternalLink size={14} />
            </a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Fairness</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors flex items-center gap-1.5">
              Gaming Helpline <ExternalLink size={14} />
            </a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Live Support</a>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-white font-semibold text-sm mb-1">About Us</h4>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">VIP Club</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Affiliate</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Responsible Play</a>
          </div>

          {/* Column 5 */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-white font-semibold text-sm mb-1">FAQ</h4>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">How-to Guides</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Social Board Gaming Guide</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Card Game Guide</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Dice Game Guide</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">Customer Support Guide</a>
            <a href="#" className="text-sm text-base-content/60 hover:text-white transition-colors">BoardBet VIP Guide</a>
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <a href="#" className="text-base-content/60 hover:text-white transition-colors">
            <MessageCircle size={20} />
          </a>
          <a href="#" className="text-base-content/60 hover:text-white transition-colors">
            {/* Placeholder Icon 1 */}
            <Box size={20} />
          </a>
          <a href="#" className="text-base-content/60 hover:text-white transition-colors">
            {/* Placeholder Icon 2 */}
            <Box size={20} />
          </a>
        </div>

        {/* Divider */}
        <hr className="border-base-content/10 mb-8" />

        {/* Bottom Section: Legal & Branding */}
        <div className="flex flex-col items-center text-center space-y-6">
          
          <p className="text-xs text-base-content/60">
            © 2026 BoardBet | All Rights Reserved.
          </p>

          {/* Certification Badge */}
          <div className="flex items-center gap-2 border border-base-content/20 rounded px-3 py-1.5 opacity-80 select-none">
            <ShieldCheck size={20} className="text-white" />
            <div className="flex flex-col text-left leading-none">
              <span className="text-[10px] font-bold text-white tracking-wider">TANZANITE</span>
              <span className="text-[10px] font-bold text-white tracking-wider">CERTIFIED</span>
            </div>
          </div>

          {/* Legal Text block */}
          <div className="text-[11px] text-base-content/50 max-w-4xl space-y-3 leading-relaxed">
            <p>
              BoardBet is owned and operated by Sweepsteaks Limited, registration number HE436222, registered address 7 Patrikiou Loumoumba, Block A, Office A13, 7560 Perivolia, Larnaka, Cyprus. <br />
              Contact us at support@boardbet.com. For press inquiries, please contact press@boardbet.com.
            </p>
            
            <p className="uppercase">
              NO PURCHASE NECESSARY to enter Sweepstakes. SWEEPSTAKES ARE VOID WHERE PROHIBITED BY LAW. For detailed rules, see <a href="#" className="font-semibold text-base-content/80 hover:text-white transition-colors hover:underline">terms of service</a>
            </p>
            
            <p>
              BoardBet is committed to responsible social play, for more information visit <a href="#" className="font-semibold text-base-content/80 hover:text-white transition-colors hover:underline">Gamingaddictsanonymous.org</a>
            </p>
          </div>

          {/* Footer Logo */}
          <div className="pt-4">
            <h1 className="text-3xl font-black italic tracking-tighter text-white select-none">
              BoardBet
            </h1>
          </div>
          
        </div>
      </div>
    </footer>
  );
}