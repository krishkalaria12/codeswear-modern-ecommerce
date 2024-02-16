import { createClient } from "@supabase/supabase-js";
import conf from '@/conf/conf'

export const supabase = createClient(conf.supabaseUrl, conf.supabaseAnionKey);

