import FormLogin from "@/components/formLogin";

export const metadata = {
    title: {
      default: "Dashboard",
    },
    description: "Dashboard",
  };

export default function dashboard() {

    return (
        <FormLogin/>
    );
    }