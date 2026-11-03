const Icon = ({ label, children, width = 32, height = 32, fill = 'currentColor', ...props }) => (
  <svg width={width} height={height} viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg" aria-label={label} role="img" {...props}>
    {children}
  </svg>
)

export const Sparkles = (props) => <Icon label="sparkles" {...props}><path d="M16 2l2.2 9.8L28 14l-9.8 2.2L16 26l-2.2-9.8L4 14l9.8-2.2L16 2zm10 20l.8 3.2L30 26l-3.2.8L26 30l-.8-3.2L22 26l3.2-.8L26 22z" /></Icon>
export const Rocket = (props) => <Icon label="rocket" {...props}><path d="M21.8 3.2C16.3 3.5 11.7 6.2 9 10l-4.6.7-1.8 3.1 5.2.2-.2 2.6 2.6-.2.2 5.2 3.1-1.8.7-4.6c3.8-2.7 6.5-7.3 6.8-12.8l.8-1.8-1.8.8zM20 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM6.2 20.8c-1.7.2-3.1 1.3-4.2 3.2 2-.3 3.4-.1 4.3.8.9.9 1.1 2.3.8 4.3 1.9-1.1 3-2.5 3.2-4.2l-4.1-4.1z" /></Icon>
export const PartyPopper = (props) => <Icon label="party popper" {...props}><path d="M3 28L14.5 5.5 26 28H3zm6.2-3h11.6L14.5 13 9.2 25zM20 7l2-4 2 4 4 2-4 2-2 4-2-4-4-2 4-2z" /></Icon>
export const Check = (props) => <Icon label="check" {...props}><path d="M12.4 25.8L3 16.4l3.4-3.4 6 6L25.6 5.8l3.4 3.4-16.6 16.6z" /></Icon>
export const X = (props) => <Icon label="close" {...props}><path d="M6.3 3.5L16 13.2l9.7-9.7 3 3-9.7 9.7 9.7 9.7-3 3-9.7-9.7-9.7 9.7-3-3 9.7-9.7-9.7-9.7 3-3z" /></Icon>
export const Warning = (props) => <Icon label="warning" {...props}><path d="M16 3L30 28H2L16 3zm0 7l-1.2 9h2.4L16 10zm0 12.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" /></Icon>
export const Star = (props) => <Icon label="star" {...props}><path d="M16 2.5l4.1 8.3 9.2 1.3-6.7 6.5 1.6 9.2-8.2-4.3-8.2 4.3 1.6-9.2-6.7-6.5 9.2-1.3L16 2.5z" /></Icon>
export const Laughing = (props) => <Icon label="laughing face" {...props}><circle cx="16" cy="16" r="13" /><path fill="white" d="M9 17h14c-.8 4.1-3 6-7 6s-6.2-1.9-7-6z" /><circle cx="11" cy="12" r="1.5" fill="white" /><circle cx="21" cy="12" r="1.5" fill="white" /></Icon>
export const Sad = (props) => <Icon label="sad face" {...props}><circle cx="16" cy="16" r="13" /><circle cx="11" cy="13" r="1.5" fill="white" /><circle cx="21" cy="13" r="1.5" fill="white" /><path fill="white" d="M10 23c1.3-3.3 3.3-4.8 6-4.8s4.7 1.5 6 4.8h-2.6c-.8-1.5-1.9-2.2-3.4-2.2s-2.6.7-3.4 2.2H10z" /></Icon>
export const Clap = (props) => <Icon label="clapping hands" {...props}><path d="M11 28c-1.8-1.1-3.4-2.9-4.7-5.4L3 15.8c-.7-1.2-.2-2.7 1-3.4 1.1-.6 2.4-.3 3.1.6L11 18V6.5a1.8 1.8 0 0 1 3.6 0v6.2h1V4.5a1.8 1.8 0 0 1 3.6 0v8.2h1V6.5a1.8 1.8 0 0 1 3.6 0v7.2h.4a1.8 1.8 0 0 1 1.8 1.8v3.1c0 5.2-3.8 9.4-9 9.4H11z" /></Icon>
