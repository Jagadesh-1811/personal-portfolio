export const StackedSocialIcon = ({ icon: Icon, label, color, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="stacked-social group relative flex flex-col items-center justify-center no-underline"
      style={{ width: '120px', height: '160px' }}
    >
      <div 
        className="relative w-16 h-16 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:-translate-y-4"
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      >
        {/* Layer 5 (Bottom) */}
        <div 
          className="absolute inset-0 rounded-xl border-2 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] opacity-0 group-hover:opacity-20 group-hover:translate-y-[24px] group-hover:translate-x-[-24px]" 
          style={{ 
            borderColor: color, 
            transform: 'rotateX(0deg) rotateZ(0deg)',
            backgroundColor: 'transparent'
          }} 
        />
        {/* Layer 4 */}
        <div 
          className="absolute inset-0 rounded-xl border-2 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] opacity-0 group-hover:opacity-40 group-hover:translate-y-[16px] group-hover:translate-x-[-16px]" 
          style={{ 
            borderColor: color, 
            transform: 'rotateX(0deg) rotateZ(0deg)',
            backgroundColor: 'transparent'
          }} 
        />
        {/* Layer 3 */}
        <div 
          className="absolute inset-0 rounded-xl border-2 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] opacity-0 group-hover:opacity-60 group-hover:translate-y-[8px] group-hover:translate-x-[-8px]" 
          style={{ 
            borderColor: color, 
            transform: 'rotateX(0deg) rotateZ(0deg)',
            backgroundColor: 'transparent'
          }} 
        />
        
        {/* Layer 2 (Flat stroke container) */}
        <div 
          className="absolute inset-0 rounded-xl border-2 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:opacity-80 group-hover:translate-y-0 group-hover:translate-x-0" 
          style={{ 
            borderColor: color, 
            transform: 'rotateX(0deg) rotateZ(0deg)',
            backgroundColor: 'transparent'
          }} 
        />
        
        {/* Layer 1 (Top/Main Icon Container) */}
        {/* Note: The image shows the unhovered state as an outlined box with a colored icon. 
            On hover, the box gets filled with the color and the icon turns white. */}
        <div 
          className="absolute inset-0 rounded-xl border-2 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:bg-(--hover-color) group-hover:border-transparent group-hover:translate-y-[-8px] group-hover:translate-x-[8px] group-hover:shadow-[-10px_10px_20px_rgba(0,0,0,0.1)]" 
          style={{ 
            borderColor: color,
            color: color,
            transform: 'rotateX(0deg) rotateZ(0deg)',
            '--hover-color': color
          }}
        >
          <div className="transition-colors duration-500 group-hover:text-white flex items-center justify-center">
            <Icon size={32} />
          </div>
        </div>
      </div>
      
      {/* Label */}
      <span 
        className="absolute bottom-2 font-bold text-lg tracking-wide opacity-0 translate-y-4 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:opacity-100 group-hover:translate-y-0"
        style={{ color }}
      >
        {label}
      </span>
      
      {/* We use a global style injection here just for the 3D rotation since inline styles don't easily support hover states for transforms alongside tailwind classes */}
      <style>{`
        .stacked-social:hover .absolute {
          transform: rotateX(55deg) rotateZ(-45deg) !important;
        }
        .stacked-social:hover .absolute > div {
          transform: rotateZ(45deg) rotateX(-55deg) !important;
        }
      `}</style>
    </a>
  );
};
