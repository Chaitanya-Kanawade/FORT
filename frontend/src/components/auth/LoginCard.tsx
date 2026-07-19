import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FortButton from "../ui/FortButton";
import FortCard from "../ui/FortCard";
import FortInput from "../ui/FortInput";
import SystemStatus from "../layout/SystemStatus";

import { login } from "../../services/auth";
import { saveToken } from "../../hooks/useAuth";

export default function LoginCard() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleLogin() {

    try {

      setLoading(true);
      setError("");

      const response = await login(
    email,
    password
    );

      saveToken(response.access_token);

      navigate("/dashboard");

    } catch {

      setError("Invalid email or password");

    } finally {

      setLoading(false);

    }

  }

  return (
    <FortCard className="w-[430px] backdrop-blur-xl">

      <h1 className="text-4xl font-bold text-cyan-400">
        FORT
      </h1>

      <p className="text-zinc-400 mt-2 mb-8">
        AI Powered Offensive Security Platform
      </p>

      <SystemStatus />

      <div className="space-y-5">

        <FortInput
          label="Email"
          placeholder="admin@fort.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FortInput
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <div className="text-red-400 text-sm">
            {error}
          </div>
        )}

        <FortButton
          fullWidth
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </FortButton>

      </div>

    </FortCard>
  );
}