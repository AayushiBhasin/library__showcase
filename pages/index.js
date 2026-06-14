import {
  BookOpen,
  Users,
  UserCheck,
  IndianRupee,
  Search,
  Filter,
  Mic,
  Pencil,
  FileText,
  UserPlus,
  Calendar,
  Phone,
  Sun,
  Moon,
  CircleDot,
  Zap,
  Shield,
  Smartphone,
  Database,
  Cloud,
  Sparkles,
  Linkedin,
  Mail,
  Github,
  Globe,
  TrendingUp,
  Activity,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Heart,
  User,
  Hash,
  ChevronRight
} from "lucide-react";
const members = [
  {
    name: "kajal",
    phone: "+91 123456781",
    joined: "7 Dec 2025",
    expires: "25 Dec 2025",
    shift: "morning",
    due: 1e3,
    no: "01",
    status: "due"
  },
  {
    name: "Abhishek",
    phone: "+91 333333333",
    joined: "7 Dec 2025",
    expires: "26 Feb 2026",
    shift: "morning",
    due: 200,
    no: "02",
    status: "due"
  },
  {
    name: "Aaditi",
    phone: "+91 2233442233",
    joined: "2 Dec 2025",
    expires: "1 Jan 2026",
    shift: "morning",
    due: 0,
    no: "03",
    status: "ok"
  },
  {
    name: "Anil",
    phone: "+91 9865256423",
    joined: "18 Sept 2025",
    expires: "26 Mar 2026",
    shift: "evening",
    due: 0,
    no: "04",
    status: "ok"
  }
];
function Section({
  eyebrow,
  title,
  subtitle,
  children,
  id
}) {
  return <section id={id} className="border-t border-slate-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          {eyebrow && <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-600">
              <CircleDot className="h-3 w-3 text-blue-600" />
              {eyebrow}
            </div>}
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="mx-auto mt-3 max-w-2xl text-slate-500">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>;
}
function Showcase() {
  return <div className="min-h-screen bg-white text-slate-900">
      {
    /* Nav */
  }
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
              <BookOpen className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-blue-600">
              Library
            </span>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-slate-600 sm:flex">
            <a href="#dashboard" className="hover:text-slate-900">Dashboard</a>
            <a href="#features" className="hover:text-slate-900">Features</a>
            {/* <a href="#stack" className="hover:text-slate-900">Tech Stack</a> */}
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a
    href="#contact"
    className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
  >
            Get in touch
          </a>
        </div>
      </header>

      {
    /* Hero */
  }
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,#dbeafe_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Library Membership Manager
          </div>
          <h1 className="mx-auto max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
            Manage your library{" "}
            <span className="text-blue-600">members</span>, shifts and dues —
            calmly.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
            A focused tool for small libraries and reading rooms. Track who's
            active, who owes, and when memberships expire — without the mess of
            spreadsheets.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
    href="#dashboard"
    className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
  >
              See it in action
            </a>
            <a
    href="#features"
    className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
  >
              Explore features
            </a>
          </div>
        </div>
      </section>

      {
    /* Dashboard */
  }
      <Section
    id="dashboard"
    eyebrow="Dashboard"
    title="A clear overview, at a glance"
    subtitle="Total members, who's currently active, and outstanding dues — all on one screen."
  >
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50/40 to-blue-50/30 p-6 shadow-[0_8px_30px_-12px_rgba(2,6,23,0.08)]">
          {
    /* decorative grid */
  }
          <div
    className="pointer-events-none absolute inset-0 opacity-[0.35]"
    style={{
      backgroundImage: "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
      backgroundSize: "32px 32px",
      maskImage: "radial-gradient(ellipse at top, black 30%, transparent 75%)"
    }}
  />
          <div className="relative">
            {
    /* Top bar */
  }
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-md shadow-blue-500/30">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-base font-semibold text-blue-600 leading-tight">
                    Library
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    All systems operational
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50">
                  <FileText className="h-4 w-4" />
                  Report
                </button>
                <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-2 text-sm font-medium text-white shadow-sm shadow-blue-600/30 hover:from-blue-700 hover:to-blue-800">
                  <UserPlus className="h-4 w-4" />
                  Add Member
                </button>
              </div>
            </div>

            {
    /* Stats */
  }
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <StatCard
    icon={<Users className="h-5 w-5" />}
    label="Total Members"
    value="5"
    tint="blue"
    trend="+2 this month"
  />
              <StatCard
    icon={<UserCheck className="h-5 w-5" />}
    label="Active Members"
    value="4"
    tint="green"
    trend="80% active rate"
  />
              <StatCard
    icon={<IndianRupee className="h-5 w-5" />}
    label="Due Amount"
    value="₹1200"
    tint="red"
    trend="2 pending payments"
  />
            </div>

            {
    /* Secondary panels */
  }
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              {
    /* Shift distribution */
  }
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <Activity className="h-4 w-4 text-blue-600" />
                    Shift Distribution
                  </div>
                  <span className="text-xs text-slate-400">This week</span>
                </div>
                <div className="space-y-3">
                  <ShiftBar label="Morning" value={3} total={5} color="from-amber-400 to-orange-500" icon={<Sun className="h-3.5 w-3.5" />} />
                  <ShiftBar label="Evening" value={1} total={5} color="from-indigo-400 to-violet-500" icon={<Moon className="h-3.5 w-3.5" />} />
                  <ShiftBar label="Full Day" value={1} total={5} color="from-blue-400 to-blue-600" icon={<CircleDot className="h-3.5 w-3.5" />} />
                </div>
              </div>

              {
    /* Recent activity */
  }
              <div className="rounded-2xl border border-slate-200 bg-white p-5 lg:col-span-2">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <Clock className="h-4 w-4 text-blue-600" />
                    Recent Activity
                  </div>
                  <a href="#" className="inline-flex items-center gap-0.5 text-xs font-medium text-blue-600 hover:underline">
                    View all <ChevronRight className="h-3 w-3" />
                  </a>
                </div>
                <ul className="space-y-3">
                  <ActivityRow
    tone="green"
    icon={<CheckCircle2 className="h-4 w-4" />}
    title="Anil's membership renewed"
    meta="Until 26 Mar 2026 · evening"
    time="2h ago"
  />
                  <ActivityRow
    tone="blue"
    icon={<UserPlus className="h-4 w-4" />}
    title="New member added — Aaditi"
    meta="Morning shift · joined 2 Dec"
    time="1d ago"
  />
                  <ActivityRow
    tone="red"
    icon={<AlertCircle className="h-4 w-4" />}
    title="kajal has ₹1000 due"
    meta="Expires 25 Dec 2025"
    time="3d ago"
  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {
    /* Members Report */
  }
      <Section
    eyebrow="Analytics Dashboard"
    title="Members Report"
    subtitle="Search, filter and manage every member — without losing context."
  >
        <div className="mb-6 grid gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:grid-cols-2">
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
            <Search className="h-4 w-4 text-slate-400" />
            <input
    placeholder="Search members..."
    className="flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
  />
            <Mic className="h-4 w-4 text-slate-400" />
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
            <Filter className="h-4 w-4 text-slate-400" />
            <select className="flex-1 bg-transparent text-sm text-slate-700 focus:outline-none">
              <option>Active Members</option>
              <option>All Members</option>
              <option>Expired</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {members.map((m) => <MemberCard key={m.no} {...m} />)}
        </div>
      </Section>

      {
    /* Add Member preview */
  }
      <Section
    eyebrow="Onboarding"
    title="Add a member in seconds"
    subtitle="A short, focused form — only what's needed, nothing else."
  >
        <div className="mx-auto max-w-xl">
          <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-20px_rgba(37,99,235,0.25)]">
            {
    /* gradient halo */
  }
            <div className="pointer-events-none absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="relative mb-7 flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-sm">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-2xl font-semibold text-transparent">
                Add Library Member
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Fill in the details — takes under a minute
              </p>
            </div>
            <div className="space-y-4">
              <Field label="Name" icon={<User className="h-3.5 w-3.5" />}>
                <FormInput placeholder="Enter member name" />
              </Field>
              <Field label="Phone Number" icon={<Phone className="h-3.5 w-3.5" />}>
                <FormInput placeholder="10-digit phone number" />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Joining Date" icon={<Calendar className="h-3.5 w-3.5" />}>
                  <FormInput placeholder="dd-mm-yyyy" />
                </Field>
                <Field label="Ending Date" icon={<Calendar className="h-3.5 w-3.5" />}>
                  <FormInput placeholder="dd-mm-yyyy" />
                </Field>
              </div>
              <Field label="Due Amount (₹)" icon={<IndianRupee className="h-3.5 w-3.5" />}>
                <FormInput defaultValue={0} />
              </Field>
              <div>
                <div className="mb-2 flex items-center gap-1.5 text-sm font-medium text-slate-700">
                  <Clock className="h-3.5 w-3.5 text-slate-400" /> Shift
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <ShiftOption label="Morning" icon={<Sun className="h-4 w-4" />} checked />
                  <ShiftOption label="Evening" icon={<Moon className="h-4 w-4" />} />
                  <ShiftOption label="Full" icon={<CircleDot className="h-4 w-4" />} />
                </div>
              </div>
              <button className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 py-3 text-sm font-medium text-white shadow-md shadow-blue-600/30 transition hover:shadow-lg hover:shadow-blue-600/40">
                <span className="relative inline-flex items-center justify-center gap-2">
                  <UserPlus className="h-4 w-4" />
                  Add Member
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </Section>

      {
    /* Features */
  }
      <Section
    id="features"
    eyebrow="Features"
    title="Everything a small library needs"
    subtitle="Built around the real day-to-day workflow of running a reading room."
  >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
    icon={<Users className="h-5 w-5" />}
    title="Member tracking"
    text="Name, phone, joining and expiry — neatly organized and searchable."
  />
          <Feature
    icon={<Calendar className="h-5 w-5" />}
    title="Shift management"
    text="Assign morning, evening or full-day shifts per member."
  />
          <Feature
    icon={<IndianRupee className="h-5 w-5" />}
    title="Dues at a glance"
    text="See total dues and per-member balances without digging."
  />
          <Feature
    icon={<Search className="h-5 w-5" />}
    title="Fast search & filters"
    text="Find any member instantly — even with voice search."
  />
          <Feature
    icon={<FileText className="h-5 w-5" />}
    title="Reports"
    text="Generate active members and revenue reports in one click."
  />
          <Feature
    icon={<Pencil className="h-5 w-5" />}
    title="Quick edits"
    text="Inline edit any member card without breaking your flow."
  />
        </div>
      </Section>

      

      {
    /* Contact */
  }
      <Section
    id="contact"
    eyebrow="Contact"
    title="Let's connect"
    subtitle="Have feedback or want to collaborate? Reach out on any of these."
  >
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-2xl font-semibold text-blue-600">
              AB
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">
              Aayushi Bhasin
            </h3>
            <p className="text-sm text-slate-500">
              Developer · Builder of Library
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <ContactItem
    icon={<Mail className="h-4 w-4" />}
    label="Email"
    value="aayushi312001@gmail.com"
    href="mailto:aayushi312001@gmail.com"
  />
            <ContactItem
    icon={<Linkedin className="h-4 w-4" />}
    label="LinkedIn"
    value="linkedin.com/in/aayushi-bhasin"
    href="https://www.linkedin.com/in/aayushi-bhasin03jan/"
  />
            <ContactItem
    icon={<Github className="h-4 w-4" />}
    label="GitHub"
    value="github.com/AayushiBhasin"
    href="https://github.com/AayushiBhasin"
  />
            <ContactItem
    icon={<Phone className="h-4 w-4" />}
    label="Phone"
    value="+91 00000 00000"
    href="tel:+910000000000"
  />
          </div>
        </div>
      </Section>

      <footer className="relative mt-10 overflow-hidden border-t border-slate-200 bg-gradient-to-b from-slate-50/60 to-white">
        <div
    className="pointer-events-none absolute inset-0 opacity-[0.25]"
    style={{
      backgroundImage: "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      maskImage: "radial-gradient(ellipse at top, black 20%, transparent 70%)"
    }}
  />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-md shadow-blue-500/30">
                  <BookOpen className="h-5 w-5" />
                </div>
                <span className="text-lg font-semibold tracking-tight text-slate-900">
                  Library
                </span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500">
                A calm, focused membership manager for small libraries and
                reading rooms. Track members, shifts and dues — without the
                spreadsheet mess.
              </p>
              <div className="mt-5 flex items-center gap-2">
                <a href="#contact" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-blue-300 hover:text-blue-600">
                  <Mail className="h-4 w-4" />
                </a>
                <a href="#contact" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-blue-300 hover:text-blue-600">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#contact" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-blue-300 hover:text-blue-600">
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">Product</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-500">
                <li><a href="#dashboard" className="hover:text-blue-600">Dashboard</a></li>
                <li><a href="#features" className="hover:text-blue-600">Features</a></li>
                <li><a href="#stack" className="hover:text-blue-600">Tech Stack</a></li>
                <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">Resources</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-600">Changelog</a></li>
                <li><a href="#" className="hover:text-blue-600">Support</a></li>
                <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row">
            <div className="flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5" />
              <span>© {(/* @__PURE__ */ new Date()).getFullYear()} Library · All rights reserved</span>
            </div>
            <div className="inline-flex items-center gap-1.5">
              Made with <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" /> for libraries everywhere
            </div>
          </div>
        </div>
      </footer>
    </div>;
}
function StatCard({
  icon,
  label,
  value,
  tint,
  trend
}) {
  const tints = {
    blue: {
      bg: "from-blue-50 to-white",
      ring: "ring-blue-100",
      icon: "from-blue-500 to-blue-700 text-white shadow-blue-500/30",
      val: "text-blue-600",
      trend: "text-blue-700 bg-blue-100/70",
      glow: "bg-blue-400/20"
    },
    green: {
      bg: "from-emerald-50 to-white",
      ring: "ring-emerald-100",
      icon: "from-emerald-500 to-emerald-700 text-white shadow-emerald-500/30",
      val: "text-emerald-600",
      trend: "text-emerald-700 bg-emerald-100/70",
      glow: "bg-emerald-400/20"
    },
    red: {
      bg: "from-rose-50 to-white",
      ring: "ring-rose-100",
      icon: "from-rose-500 to-rose-700 text-white shadow-rose-500/30",
      val: "text-rose-600",
      trend: "text-rose-700 bg-rose-100/70",
      glow: "bg-rose-400/20"
    }
  }[tint];
  return <div
    className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${tints.bg} p-5 ring-1 ${tints.ring} transition hover:shadow-md`}
  >
      <div
    className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full ${tints.glow} blur-2xl transition group-hover:scale-125`}
  />
      <div className="relative flex items-start justify-between">
        <div
    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${tints.icon} shadow-md`}
  >
          {icon}
        </div>
        <TrendingUp className={`h-4 w-4 ${tints.val} opacity-60`} />
      </div>
      <div className="relative mt-5 text-sm font-medium text-slate-600">{label}</div>
      <div className={`relative mt-1 text-3xl font-bold tracking-tight ${tints.val}`}>
        {value}
      </div>
      {trend && <div className={`relative mt-3 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${tints.trend}`}>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
          {trend}
        </div>}
    </div>;
}
function ShiftBar({
  label,
  value,
  total,
  color,
  icon
}) {
  const pct = Math.round(value / total * 100);
  return <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 font-medium text-slate-700">
          <span className="text-slate-500">{icon}</span>
          {label}
        </div>
        <span className="text-slate-500">{value}/{total}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div
    className={`h-full rounded-full bg-gradient-to-r ${color}`}
    style={{ width: `${pct}%` }}
  />
      </div>
    </div>;
}
function ActivityRow({
  tone,
  icon,
  title,
  meta,
  time
}) {
  const tones = {
    green: "bg-emerald-50 text-emerald-600",
    blue: "bg-blue-50 text-blue-600",
    red: "bg-rose-50 text-rose-600"
  }[tone];
  return <li className="flex items-start gap-3 rounded-xl border border-transparent p-2 transition hover:border-slate-100 hover:bg-slate-50/60">
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${tones}`}>
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium text-slate-800">{title}</div>
        <div className="truncate text-xs text-slate-500">{meta}</div>
      </div>
      <div className="shrink-0 text-xs text-slate-400">{time}</div>
    </li>;
}
function MemberCard({
  name,
  phone,
  joined,
  expires,
  shift,
  due,
  no,
  status
}) {
  const isDue = status === "due";
  const ShiftIcon = shift === "evening" ? Moon : shift === "morning" ? Sun : CircleDot;
  return <div
    className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg`}
  >
      {
    /* status accent bar */
  }
      <div
    className={`absolute left-0 top-0 h-full w-1 ${isDue ? "bg-gradient-to-b from-rose-400 to-rose-600" : "bg-gradient-to-b from-emerald-400 to-emerald-600"}`}
  />
      {
    /* corner glow */
  }
      <div
    className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl transition group-hover:scale-125 ${isDue ? "bg-rose-200/40" : "bg-emerald-200/40"}`}
  />

      <div className="relative flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold ${isDue ? "bg-rose-50 text-rose-600" : "bg-emerald-50 text-emerald-600"}`}>
            {name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-semibold text-slate-900">{name}</h4>
              <span
    className={`relative inline-flex h-2 w-2 ${isDue ? "" : ""}`}
    aria-hidden
  >
                <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${isDue ? "bg-rose-400" : "bg-emerald-400"}`} />
                <span className={`relative inline-flex h-2 w-2 rounded-full ${isDue ? "bg-rose-500" : "bg-emerald-500"}`} />
              </span>
            </div>
            <div className="mt-0.5 flex items-center gap-1 text-sm text-slate-500">
              <Phone className="h-3 w-3" />
              {phone}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-0.5 rounded-lg bg-slate-50 px-2 py-1 text-sm font-bold tracking-tight text-slate-400">
          <Hash className="h-3 w-3" />
          {no}
        </div>
      </div>

      <div className="relative mt-5 grid grid-cols-3 gap-3 rounded-xl bg-slate-50/70 p-3 text-sm">
        <div>
          <div className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-slate-400">
            <Calendar className="h-3 w-3" /> Joined
          </div>
          <div className="mt-0.5 font-semibold text-slate-700">{joined}</div>
        </div>
        <div>
          <div className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-slate-400">
            <Clock className="h-3 w-3" /> Expires
          </div>
          <div className="mt-0.5 font-semibold text-slate-700">{expires}</div>
        </div>
        <div>
          <div className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-slate-400">
            <ShiftIcon className="h-3 w-3" /> Shift
          </div>
          <div className="mt-0.5 font-semibold capitalize text-slate-700">{shift}</div>
        </div>
      </div>

      <div className="relative mt-4 flex items-center justify-between border-t border-dashed border-slate-200 pt-3">
        <div
    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-sm font-semibold ${isDue ? "bg-rose-50 text-rose-600" : "bg-emerald-50 text-emerald-600"}`}
  >
          <IndianRupee className="h-3.5 w-3.5" />
          {isDue ? `Due: \u20B9${due}` : "All clear"}
        </div>
        <button className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:border-blue-300 hover:text-blue-600">
          <Pencil className="h-3.5 w-3.5" />
          Edit
        </button>
      </div>
    </div>;
}
function Field({
  label,
  icon,
  children
}) {
  return <div>
      <div className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-700">
        {icon && <span className="text-slate-400">{icon}</span>}
        {label}
      </div>
      {children}
    </div>;
}
function FormInput(props) {
  return <input
    {...props}
    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 transition focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
  />;
}
function ShiftOption({
  label,
  icon,
  checked
}) {
  return <label
    className={`flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border px-3 py-2.5 text-sm transition ${checked ? "border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-100" : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50/40"}`}
  >
      {icon}
      <span className="font-medium">{label}</span>
    </label>;
}
function Radio({
  label,
  icon,
  checked
}) {
  return <label className="inline-flex cursor-pointer items-center gap-2">
      <span
    className={`flex h-4 w-4 items-center justify-center rounded-full border ${checked ? "border-blue-600" : "border-slate-300"}`}
  >
        {checked && <span className="h-2 w-2 rounded-full bg-blue-600" />}
      </span>
      <span className={`flex items-center gap-1 ${checked ? "text-blue-600 font-medium" : ""}`}>
        {icon}
        {label}
      </span>
    </label>;
}
function Feature({
  icon,
  title,
  text
}) {
  return <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-sm">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-500">{text}</p>
    </div>;
}
// function TechCard({
//   icon,
//   name,
//   reason
// }) {
//   return <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/60 p-6">
//       <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-blue-600 ring-1 ring-slate-200">
//         {icon}
//       </div>
//       <h3 className="text-base font-semibold text-slate-900">{name}</h3>
//       <p className="mt-1 text-sm text-slate-500">{reason}</p>
//     </div>;
// }
function ContactItem({
  icon,
  label,
  value,
  href
}) {
  return <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition hover:border-blue-300 hover:bg-blue-50/40"
  >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs text-slate-400">{label}</span>
        <span className="block truncate text-sm font-medium text-slate-800">
          {value}
        </span>
      </span>
    </a>;
}

export default Showcase;
