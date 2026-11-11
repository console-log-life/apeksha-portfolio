import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import GlassPanel from "@/components/common/GlassPanel";
import SectionHeading from "@/components/common/SectionHeading";
import SectionShell from "@/components/common/SectionShell";
import { contactChannels, portfolioMeta } from "@/data/portfolio";

const initialForm = { name: "", email: "", message: "" };

const buildMailTo = (formData) => {
  const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
  );

  return `mailto:${portfolioMeta.email}?subject=${subject}&body=${body}`;
};

const ContactSection = () => {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSending, setIsSending] = useState(false);

  const emailConfig = useMemo(
    () => ({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim(),
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim(),
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim(),
    }),
    [],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus({ type: "idle", message: "" });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email,
      to_name: portfolioMeta.name,
    };

    try {
      if (emailConfig.publicKey && emailConfig.serviceId && emailConfig.templateId) {
        await emailjs.send(
          emailConfig.serviceId,
          emailConfig.templateId,
          templateParams,
          emailConfig.publicKey,
        );

        setStatus({
          type: "success",
          message: "Message sent successfully. Apeksha will see it through EmailJS.",
        });
      } else {
        window.location.href = buildMailTo(formData);
        setStatus({
          type: "success",
          message:
            "EmailJS environment keys are missing, so the form switched to direct email instead.",
        });
      }

      setFormData(initialForm);
    } catch (_error) {
      setStatus({
        type: "error",
        message:
          "The message could not be sent automatically. Please use the direct email link below.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <SectionShell id="contact">
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Let’s build something <span className="aurora-text">thoughtful and technically sharp</span>.
          </>
        }
        description="Whether the conversation starts with a project idea, collaboration, or feedback on the work here, the easiest path is a direct message."
      />

      <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
        <GlassPanel className="glass-panel-strong p-6 sm:p-8" data-reveal>
          <div className="text-xs uppercase tracking-[0.26em] text-cyan-200/70">Reach out</div>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            I am interested in ambitious product work, thoughtful frontend roles, and opportunities
            that value both presentation quality and implementation depth.
          </p>

          <div className="mt-8 space-y-4">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;

              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-[1.4rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-slate-100 transition hover:border-cyan-300/25 hover:bg-cyan-300/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-100">
                    <Icon />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-500">{channel.label}</div>
                    <div className="mt-1 text-sm text-slate-200">{channel.value}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </GlassPanel>

        <GlassPanel className="p-6 sm:p-8" data-reveal data-reveal-direction="left">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.22em] text-slate-500">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-shell"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.22em] text-slate-500">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-shell"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.22em] text-slate-500">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="input-shell min-h-[180px] resize-none"
                placeholder="Tell me about the project, role, or idea."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-medium text-slate-950 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send message"}
            </button>

            {status.message ? (
              <div
                className={`rounded-[1.25rem] border px-4 py-3 text-sm ${
                  status.type === "error"
                    ? "border-rose-300/30 bg-rose-300/10 text-rose-100"
                    : "border-cyan-300/25 bg-cyan-300/10 text-cyan-50"
                }`}
              >
                {status.message}
              </div>
            ) : null}
          </form>
        </GlassPanel>
      </div>
    </SectionShell>
  );
};

export default ContactSection;
