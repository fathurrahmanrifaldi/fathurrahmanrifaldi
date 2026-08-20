import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";
import { TrendingUp, Users, Clock, FolderKanban } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/* ===== Dummy Data ===== */
const technologyUsage = [
  { name: "Python", value: 85, fill: "#06B6D4" },
  { name: "SQL", value: 78, fill: "#3B82F6" },
  { name: "Power BI", value: 72, fill: "#F59E0B" },
  { name: "PHP", value: 65, fill: "#10B981" },
  { name: "JavaScript", value: 58, fill: "#8B5CF6" }, 
];

const learningHours = [
  { month: "Jan", hours: 45 },
  { month: "Feb", hours: 52 },
  { month: "Mar", hours: 68 },
  { month: "Apr", hours: 61 },
  { month: "May", hours: 78 },
  { month: "Jun", hours: 85 },
  { month: "Jul", hours: 92 },
  { month: "Aug", hours: 88 },
];

const projectDistribution = [
  { name: "Data Analytics", value: 35, color: "#06B6D4" },
  { name: "Web Development", value: 30, color: "#3B82F6" },
  { name: "System Design", value: 20, color: "#8B5CF6" },
  { name: "UI/UX", value: 15, color: "#10B981" },
];

const techInterest = [
  { month: "Jan", ai: 40, web: 60, data: 55 },
  { month: "Feb", ai: 45, web: 58, data: 62 },
  { month: "Mar", ai: 55, web: 55, data: 68 },
  { month: "Apr", ai: 62, web: 52, data: 72 },
  { month: "May", ai: 70, web: 58, data: 75 },
  { month: "Jun", ai: 78, web: 62, data: 80 },
];

const kpis = [
  { label: "Most Used Tech", value: "Python", icon: TrendingUp, color: "text-accent-cyan" },
  { label: "Monthly Avg Hours", value: "64h", icon: Clock, color: "text-accent-violet" },
  { label: "Total Projects", value: "10", icon: FolderKanban, color: "text-accent-emerald" },
  { label: "Collaborations", value: "6", icon: Users, color: "text-accent-blue" },
];

/* eslint-disable @typescript-eslint/no-explicit-any */
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-bg-primary border border-border rounded-lg px-3 py-2 shadow-xl text-xs">
        <p className="text-text-primary font-medium mb-1">{label}</p>
        {payload.map((entry: any, i: number) => (
          <p key={i} style={{ color: entry.color || entry.fill }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

export default function DataInAction() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="data-playground"
      className="relative py-24 lg:py-32 bg-bg-secondary"
      aria-label="Data in Action"
    >
      <div className="absolute inset-0 bg-dots opacity-15" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Data in Action"
          subtitle="Student Technology Trends"
          gradient="emerald"
        />

        <p className="text-center text-text-secondary max-w-2xl mx-auto mb-12 -mt-8">
          A snapshot of technology learning patterns and project distribution.
          This section demonstrates my ability to communicate data visually.
        </p>

        {/* KPI Cards */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {kpis.map((kpi) => (
            <Card key={kpi.label} glow="cyan" className="text-center">
              <kpi.icon className={`w-6 h-6 mx-auto mb-2 ${kpi.color}`} />
              <div className={`text-2xl font-bold ${kpi.color}`}>
                {kpi.value}
              </div>
              <div className="text-xs text-text-muted mt-1">{kpi.label}</div>
            </Card>
          ))}
        </motion.div>

        {/* Charts grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Bar Chart: Technology Usage */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card hover={false} className="p-6">
              <h3 className="text-sm font-semibold text-text-primary mb-1">
                Most Used Technologies
              </h3>
              <p className="text-xs text-text-muted mb-6">
                Based on project frequency and usage hours
              </p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={technologyUsage} barCategoryGap="20%">
                    <XAxis
                      dataKey="name"
                      tick={{ fill: "#9CA3AF", fontSize: 11 }}
                      axisLine={{ stroke: "#1E2330" }}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: "#9CA3AF", fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(6,182,212,0.05)" }} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} name="Usage Score">
                      {technologyUsage.map((entry, index) => (
                        <Cell key={index} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>

          {/* Area Chart: Learning Hours */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card hover={false} className="p-6">
              <h3 className="text-sm font-semibold text-text-primary mb-1">
                Learning Hours
              </h3>
              <p className="text-xs text-text-muted mb-6">
                Monthly technology learning hours trend
              </p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={learningHours}>
                    <defs>
                      <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1E2330" />
                    <XAxis
                      dataKey="month"
                      tick={{ fill: "#9CA3AF", fontSize: 11 }}
                      axisLine={{ stroke: "#1E2330" }}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: "#9CA3AF", fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="hours"
                      stroke="#06B6D4"
                      strokeWidth={2}
                      fill="url(#colorHours)"
                      name="Hours"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>

          {/* Pie Chart: Project Distribution */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card hover={false} className="p-6">
              <h3 className="text-sm font-semibold text-text-primary mb-1">
                Project Distribution
              </h3>
              <p className="text-xs text-text-muted mb-6">
                Projects by category breakdown
              </p>
              <div className="h-64 flex items-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Tooltip content={<CustomTooltip />} />
                    <Pie
                      data={projectDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={85}
                      paddingAngle={4}
                      dataKey="value"
                      nameKey="name"
                      stroke="none"
                    >
                      {projectDistribution.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-2 shrink-0">
                  {projectDistribution.map((item) => (
                    <div key={item.name} className="flex items-center gap-2 text-xs">
                      <div
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-text-secondary whitespace-nowrap">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Line Chart: Technology Interest */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card hover={false} className="p-6">
              <h3 className="text-sm font-semibold text-text-primary mb-1">
                Technology Interest Trends
              </h3>
              <p className="text-xs text-text-muted mb-6">
                Interest score across different tech domains
              </p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={techInterest}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1E2330" />
                    <XAxis
                      dataKey="month"
                      tick={{ fill: "#9CA3AF", fontSize: 11 }}
                      axisLine={{ stroke: "#1E2330" }}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: "#9CA3AF", fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="ai"
                      stroke="#8B5CF6"
                      strokeWidth={2}
                      dot={{ r: 3, fill: "#8B5CF6" }}
                      name="AI/ML"
                    />
                    <Line
                      type="monotone"
                      dataKey="web"
                      stroke="#06B6D4"
                      strokeWidth={2}
                      dot={{ r: 3, fill: "#06B6D4" }}
                      name="Web Dev"
                    />
                    <Line
                      type="monotone"
                      dataKey="data"
                      stroke="#10B981"
                      strokeWidth={2}
                      dot={{ r: 3, fill: "#10B981" }}
                      name="Data"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
