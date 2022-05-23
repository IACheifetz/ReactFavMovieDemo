import React from 'react';
import { logout } from './services/supabase-utils';

export default function SearchPage() {
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
